/**
 * The localStorage the upstream Agentation toolbar owns, seen from outside.
 *
 * Shared by the toolbar bundle (which reacts to deletions broadcast from the
 * backend module) and the backend module itself (which lists and deletes
 * annotations). Both read and write through the *original* Storage methods:
 * the toolbar bundle scopes Agentation's keys by monkey-patching the
 * localStorage instance, and keys enumerated from the store are already
 * scoped, so they must not be rewritten a second time.
 */
export const STORAGE_PREFIXES = [
  'feedback-annotations-',
  'agentation-design-',
  'agentation-rearrange-',
  'agentation-wireframe-',
  'agentation-session-',
];

export const ANNOTATION_LIST_PREFIX = 'feedback-annotations-';

/** Same-origin channel the backend module uses to announce deletions. */
export const BROADCAST_CHANNEL = 'typo3-agentation';

const raw = {
  get: Storage.prototype.getItem.bind(localStorage),
  set: Storage.prototype.setItem.bind(localStorage),
  remove: Storage.prototype.removeItem.bind(localStorage),
};

const isAgentationKey = (key) => STORAGE_PREFIXES.some((prefix) => key.startsWith(prefix));

const annotationListKeys = () => Object.keys(localStorage).filter((key) => key.startsWith(ANNOTATION_LIST_PREFIX));

function readList(key) {
  try {
    const list = JSON.parse(raw.get(key) || '[]');
    return Array.isArray(list) ? list : [];
  } catch {
    return [];
  }
}

function writeList(key, list) {
  if (list.length === 0) {
    raw.remove(key);
  } else {
    raw.set(key, JSON.stringify(list));
  }
}

/**
 * Every annotation object stored in any annotation list (across all scopes).
 */
export function collectLocalAnnotations() {
  return annotationListKeys().flatMap((key) => readList(key).filter((annotation) => annotation?.id));
}

/**
 * Removes one annotation id from every annotation list. Returns whether
 * anything was removed.
 */
export function removeLocalAnnotation(id) {
  if (!id) {
    return false;
  }
  let touched = false;
  for (const key of annotationListKeys()) {
    const list = readList(key);
    const kept = list.filter((annotation) => annotation?.id !== id);
    if (kept.length !== list.length) {
      touched = true;
      writeList(key, kept);
    }
  }
  return touched;
}

/**
 * Removes every Agentation-owned key. Returns the number of keys removed.
 */
export function clearLocalAnnotations() {
  const keys = Object.keys(localStorage).filter(isAgentationKey);
  keys.forEach((key) => raw.remove(key));
  return keys.length;
}
