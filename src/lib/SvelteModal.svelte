<!-- @component
`SvelteModal` renders a `<dialog>` element and accepts the following props:

- `id`: string (`id` attribute for `<dialog>` element.)
- `class`: string (Classes to apply on `<dialog>` element.)
- `blocking`: boolean (Disable close by backdrop click, `Esc`, or the Back button.)
- `attach`: import('svelte/attachments').Attachment (Feature attachment function.)
- `ref`: HTMLDialogElement (Reference to `<dialog>` element.)

And exposes the following methods:

- `show()`: Show modal dialog and return a promise that resolves with `returnValue` when modal is closed.
- `close(val?: string)`: Close modal dialog with optional `returnValue`.
-->

<script>
/** @typedef {{ show: () => Promise<string>; close: (value?: string) => void }} SvelteModal */

/**
 * @typedef {Object} SvelteModalProps
 * @prop {string} [id] - `id` attribute for `<dialog>` element.
 * @prop {string} [class=''] - Classes to apply on `<dialog>` element.
 * @prop {boolean} [blocking=false] - Disable close by backdrop click, `Esc`, or the Back button.
 * @prop {import('svelte/attachments').Attachment} [attach] - Feature attachment function.
 * @prop {HTMLDialogElement} [ref] - Reference to `<dialog>` element.
 * @prop {import('svelte').Snippet<[]>} children
 */

/** @type {SvelteModalProps} */
let {
  id = undefined,
  class: klass = '',
  blocking = false,
  attach = () => {},
  ref = $bindable(),
  children
} = $props()

let rest = $derived(blocking ? { blocking: '' } : {})
/** @type {((value: string) => void) | null} */
let resolve = null

/** @param {MouseEvent} e */
function onclick(e) {
  if (!blocking && ref && !e.composedPath().includes(ref)) close()
}

/** @param {Event} e */
function oncancel(e) {
  e.preventDefault()
  if (!blocking) close()
}

function onclose() {
  if (resolve) resolve(ref?.returnValue || '')
  if (ref) ref.returnValue = ''
  resolve = null
}

/**
 * Show modal dialog and return a promise that resolves with `returnValue` when modal is closed.
 * @returns {Promise<string>}
 */
export function show() {
  ref?.showModal()
  return new Promise((r) => (resolve = r))
}

/**
 * Close modal dialog with optional `returnValue`.
 * @param {string} [val='']
 */
export function close(val = '') {
  ref?.close(val)
}
</script>

<dialog
  {id}
  class={klass}
  closedby={blocking ? 'none' : 'any'}
  bind:this={ref}
  {@attach attach}
  {onclick}
  {oncancel}
  {onclose}
  {...rest}
>
  {@render children()}
</dialog>

<style>
dialog {
  margin: auto;
}
</style>
