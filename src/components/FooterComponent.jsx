import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <footer className = "footer">
                    <span className="text-muted">Fund Management Apllication on NEX-GEN Hackathon 0.1</span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent
