function bodyText() {
    
    const home = () => {
        const homeText = `<div id="home-body">
                <div class="info">
                    <p>Home of the egg sando. Serving up all your breakfast favourites. Either for you midweek get go or weekend recovery, we've got what you're after</p>
                </div>
            </div>`
        return homeText
    }

    const menu = () => {
        const menuText = `<div class="container" id="menu">
            <h2>MENU</h2>
            
            <div class="menu-item">
                <h3>Brekkie Bagel</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div class="menu-item">
                <h3>Hash and Smash</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="menu-item">
                <h3>Sweet Scram</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>`
        return menuText
    }

    const about = () => {
        const aboutText = `<div class="container" id="about">
            <h2>About Us</h2>
            <div class="info">
                <p>Location</p>
                <p>Your dreams</p>
            </div>
        </div>`
        return aboutText
    }


    return {
        home,
        menu,
        about,
    }
}

const newBody = bodyText()

export const changeBody = newBody;