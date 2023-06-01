import React from 'react';
import MainPage from './main';
import Main from './main';

interface Guest {
    name: string;
    surname: string;
    nameRus: string;
}

interface GuestPageProps {
    pageContext: {
        guest: Guest;
    };
}

const GuestPage: React.FC<GuestPageProps> = ({ pageContext }) => {
    const { guest } = pageContext;
    const { name, surname, nameRus } = guest;

    return (
        <main className='min-h-screen text-slate-50'>
            <MainPage name={ nameRus } />
        </main>

    );
};

export default GuestPage;
