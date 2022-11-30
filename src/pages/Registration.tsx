import React from 'react'
import Navigation from '../components/Partials/Navigation';
import Footer from '../components/Partials/Footer';
import {Affix} from 'antd';
import RegistrationForm from '../components/RegistrationForm';

const Registration = () => {
    return (
        <main>
            <div>
                <Affix>
                    <Navigation />
                </Affix>
                <RegistrationForm />
                <Footer />
            </div>
        </main>
    )
}

export default Registration