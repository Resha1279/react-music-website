import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import { animateScroll as scroll } from 'react-scroll';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	NavIcon,
	MobileIcon,
	NavMenu,
	NavItem,
	NavItemBtn,
	NavLinks,
	NavBtnLink,
} from './Navbar.elements';
import { useHistory } from 'react-router-dom';

function Navbar() {
	const [click, setClick] = useState(false);
	const [background, setBackground] = useState(false);
	let history = useHistory();

	const handleClick = () => {
		setClick(!click);
	};
	const closeMobileMenu = () => {
		if (history.location.pathname !== '/') {
			history.replace('/');
		}

		setClick(false);
	};

	const handleScroll = () => {
		if (window.scrollY >= 80) {
			setBackground(true);
			return;
		}
		setBackground(false);
	};

	window.addEventListener('scroll', handleScroll);

	const data = ['About', 'Services', 'Products', 'Pricing'];

	return (
		<>
			<IconContext.Provider value={{ color: '#fff' }}>
				<Nav background={background}>
					<NavbarContainer>
						<NavLogo to="/" onClick={scroll.scrollToTop}>
							<NavIcon src="./logo.svg" alt="" />
							IMusic
						</NavLogo>
						<MobileIcon onClick={handleClick}>
							{click ? <FaTimes /> : <FaBars />}
						</MobileIcon>

						<NavMenu onClick={handleClick} click={click}>
							{data.map((navItem, index) => (
								<NavItem key={index}>
									<NavLinks
										spy={true}
										duration={500}
										smooth={true}
										exact="true"
										offset={-80}
										to={navItem.toLowerCase()}
										onClick={closeMobileMenu}
									>
										{navItem}
									</NavLinks>
								</NavItem>
							))}
							<NavItemBtn>
								<NavBtnLink to="/sign-up">
									<Button onClick={closeMobileMenu} fontBig primary>
										SIGN UP
									</Button>
								</NavBtnLink>
							</NavItemBtn>
						</NavMenu>
					</NavbarContainer>
				</Nav>
			</IconContext.Provider>
		</>
	);
}

export default Navbar;
