// TODO [Alper] correct the dropdown menu poisiton logic

function dropdownBtn(text, dropdownMenuClass, parent) {
  const dropdownBtn = document.createElement('button')

  dropdownBtn.classList.add('dropdown-btn')
  dropdownBtn.textContent = text

  const dropdownMenu = document.querySelector(`.${dropdownMenuClass}`)

  dropdownBtn.addEventListener('mouseover', () => {
    dropdownMenu.removeAttribute('hidden', '')
  })

  dropdownBtn.addEventListener('mouseleave', (e) => {
    if (!dropdownMenu.contains(e.relatedTarget)) {
      dropdownMenu.setAttribute('hidden', '')
    }
  })

  dropdownBtn.addEventListener('mouseleave', () => {
    dropdownMenu.setAttribute('hidden', '')
  })

  dropdownBtn.appendChild(dropdownMenu)

  dropdownBtn.style.position = 'relative'

  dropdownMenu.style.position = 'absolute'
  dropdownMenu.style.bottom = '-200%' // this seems not right
  dropdownMenu.style.left = 0

  parent.appendChild(dropdownBtn)
  return dropdownBtn
}

export default dropdownBtn
