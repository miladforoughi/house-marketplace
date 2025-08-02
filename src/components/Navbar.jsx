import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import OfferIcon from '/src/assets/svg/localOfferIcon.svg'
import ExploreIcon from '/src/assets/svg/exploreIcon.svg'
import PersonOutLineIcon from '/src/assets/svg/personOutlineIcon.svg'

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true
    }
  }

  return (
    <footer className='navbar'>
      <nav className='navbarNav'>
        <ul className='navbarListItems'>
          <li className='navbarListItem' onClick={() => navigate('/')}>
            <img
              src={ExploreIcon}
              style={{
                filter: pathMatchRoute('/')
                  ? 'brightness(0) saturate(100%) invert(10%) sepia(3%) saturate(5%) hue-rotate(343deg) brightness(103%) contrast(82%)'
                  : 'brightness(0) saturate(100%) invert(60%) sepia(6%) saturate(30%) hue-rotate(314deg) brightness(93%) contrast(99%)',
                width: '36px',
                height: '36px',
              }}
              alt=''
            />
            <p
              className={
                pathMatchRoute('/')
                  ? 'navbarListItemNameActive'
                  : 'navbarListItemName'
              }
            >
              Explore
            </p>
          </li>
          <li className='navbarListItem' onClick={() => navigate('/offers')}>
            <img
              src={OfferIcon}
              style={{
                filter: pathMatchRoute('/offers')
                  ? 'brightness(0) saturate(100%) invert(10%) sepia(3%) saturate(5%) hue-rotate(343deg) brightness(103%) contrast(82%)'
                  : 'brightness(0) saturate(100%) invert(60%) sepia(6%) saturate(30%) hue-rotate(314deg) brightness(93%) contrast(99%)',
                width: '36px',
                height: '36px',
              }}
              alt=''
            />
            <p
              className={
                pathMatchRoute('/offers')
                  ? 'navbarListItemNameActive'
                  : 'navbarListItemName'
              }
            >
              Offers
            </p>
          </li>
          <li className='navbarListItem' onClick={() => navigate('/profile')}>
            <img
              src={PersonOutLineIcon}
              style={{
                filter: pathMatchRoute('/profile')
                  ? 'brightness(0) saturate(100%) invert(10%) sepia(3%) saturate(5%) hue-rotate(343deg) brightness(103%) contrast(82%)'
                  : 'brightness(0) saturate(100%) invert(60%) sepia(6%) saturate(30%) hue-rotate(314deg) brightness(93%) contrast(99%)',
                width: '36px',
                height: '36px',
              }}
              alt=''
            />
            <p
              className={
                pathMatchRoute('/profile')
                  ? 'navbarListItemNameActive'
                  : 'navbarListItemName'
              }
            >
              Profile
            </p>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Navbar
