import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test.describe('svelte-modal examples', () => {
  test('has expected page title and header', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1, name: 'svelte-modal' })).toBeVisible()
    await expect(page.locator('blockquote')).toHaveText('Svelte modals done right.')
  })

  test('1. Basic usage: opens modal and closes on Escape', async ({ page }) => {
    const section = page.locator('h3:has-text("1. Basic usage") + p + pre + div')
    const trigger = section.getByRole('button', { name: 'Show modal' })
    const dialog = page.locator('dialog').filter({ hasText: 'Hello world!' }).first()

    await expect(dialog).not.toBeVisible()
    await trigger.click()
    await expect(dialog).toBeVisible()

    await page.keyboard.press('Escape')
    await expect(dialog).not.toBeVisible()
  })

  test.describe('2. Styling tabs', () => {
    test('Vanilla tab modal opens and closes with Escape', async ({ page }) => {
      await page.getByRole('radio', { name: 'Vanilla' }).click()
      const trigger = page.locator('.tabs > input[aria-label="Vanilla"] + .tab-content button')
      const dialog = page.locator('dialog.my-modal')

      await expect(dialog).not.toBeVisible()
      await trigger.click()
      await expect(dialog).toBeVisible()

      await page.keyboard.press('Escape')
      await expect(dialog).not.toBeVisible()
    })

    test('Tailwind CSS tab modal opens and closes with Escape', async ({ page }) => {
      // Tailwind CSS tab is checked by default
      const trigger = page.locator('.tabs > input[aria-label="Tailwind CSS"] + .tab-content button')
      const dialog = page.locator('dialog.w-9\\/10')

      await expect(dialog).not.toBeVisible()
      await trigger.click()
      await expect(dialog).toBeVisible()

      await page.keyboard.press('Escape')
      await expect(dialog).not.toBeVisible()
    })

    test('DaisyUI tab modal opens and closes via backdrop cancel button', async ({ page }) => {
      await page.getByRole('radio', { name: 'DaisyUI' }).click()
      const trigger = page.locator('.tabs > input[aria-label="DaisyUI"] + .tab-content button')
      const dialog = page.locator('dialog.modal')

      await expect(dialog).not.toBeVisible()
      await trigger.click()
      await expect(dialog).toBeVisible()

      // DaisyUI uses a full-screen backdrop form button behind the modal-box to close.
      // Clicking at the top-left corner ensures clicking the backdrop area, not the centered modal-box.
      const backdropBtn = dialog.locator('form.modal-backdrop button')
      await backdropBtn.click({ position: { x: 5, y: 5 } })
      await expect(dialog).not.toBeVisible()
    })
  })

  test('3. Enhanced state: closes modal on browser back button navigation', async ({ page }) => {
    const section = page.locator('h3:has-text("3. Enhanced state") + p + pre + div')
    const trigger = section.getByRole('button', { name: 'Show modal' })
    const dialog = page.locator('dialog').filter({
      hasText: 'ESC, backdrop click, and the back button closes the modal.'
    })

    await expect(dialog).not.toBeVisible()
    await trigger.click()
    await expect(dialog).toBeVisible()

    // Browser back button should close the modal via enhancedState attachment
    await page.goBack()
    await expect(dialog).not.toBeVisible()
  })

  test.describe('4. Idiomatic code (return value)', () => {
    test('canceling modal resolves without confetti', async ({ page }) => {
      const section = page.locator('h3:has-text("4. Idiomatic code") + p + pre + div')
      const trigger = section.getByRole('button', { name: 'Show modal' })
      const dialog = page.locator('dialog').filter({ hasText: 'Are cats the cutest pets?' })

      await expect(dialog).not.toBeVisible()
      await trigger.click()
      await expect(dialog).toBeVisible()

      await dialog.getByRole('button', { name: 'Cancel' }).click()
      await expect(dialog).not.toBeVisible()

      // Confetti should not appear
      await page.waitForTimeout(500)
      await expect(page.locator('.fixed')).not.toBeAttached()
    })

    test('confirming modal resolves with "yes" and shows confetti', async ({ page }) => {
      const section = page.locator('h3:has-text("4. Idiomatic code") + p + pre + div')
      const trigger = section.getByRole('button', { name: 'Show modal' })
      const dialog = page.locator('dialog').filter({ hasText: 'Are cats the cutest pets?' })

      await trigger.click()
      await expect(dialog).toBeVisible()

      await dialog.getByRole('button', { name: 'Yes, absolutely' }).click()
      await expect(dialog).not.toBeVisible()

      // Confetti container is dynamically mounted when pop() is called
      await expect(page.locator('.fixed')).toBeAttached()
    })
  })

  test('5. Blocking modals: cannot be dismissed by Escape or Back; closes with escape hatch', async ({
    page
  }) => {
    const section = page.locator('h3:has-text("5. Blocking modals") + p + pre + div')
    const trigger = section.getByRole('button', { name: 'Show modal' })
    const dialog = page.locator('dialog[blocking]')

    await expect(dialog).not.toBeVisible()
    await trigger.click()
    await expect(dialog).toBeVisible()

    // Pressing Escape should NOT close blocking modal
    await page.keyboard.press('Escape')
    await expect(dialog).toBeVisible()

    // Navigating back should NOT close blocking modal
    await page.goBack()
    await expect(dialog).toBeVisible()

    // Escape hatch button closes the modal
    await dialog.getByRole('button', { name: 'Escape hatch' }).click()
    await expect(dialog).not.toBeVisible()
  })

  test('6. Declarative use: opens and closes via invoker commands', async ({ page }) => {
    const trigger = page.locator('button[commandfor="modal-7"][command="show-modal"]')
    const dialog = page.locator('#modal-7')

    await expect(dialog).not.toBeVisible()
    await trigger.click()
    await expect(dialog).toBeVisible()

    const closeBtn = dialog.locator('button[commandfor="modal-7"][command="close"]')
    await closeBtn.click()
    await expect(dialog).not.toBeVisible()
  })
})
