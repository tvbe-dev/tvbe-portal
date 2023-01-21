import { Persona, Button, makeStyles, shorthands, Title1, tokens } from '@fluentui/react-components';
import type { NextPage } from 'next';
import { useSession, signIn, signOut } from 'next-auth/react';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import TopBar from '@/domain/navigation/TopBar';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '200px',
        ...shorthands.padding('20px')
    }
});

const Home: NextPage = () => {
    const { data: session } = useSession();
    const styles = useStyles();

    return (
        <>
            <TopBar />
        </>
    );
};

export default Home;
