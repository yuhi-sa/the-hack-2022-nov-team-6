type Props = {
  toggleMobileMenu: () => void
}

const MenuButton = ({ toggleMobileMenu }: Props) => {
  return (
    <button className='md:hidden' onClick={toggleMobileMenu}>
      ■
    </button>
  )
}

export default MenuButton
