import { Text, Menu, MenuTrigger, MenuPopover, MenuList, MenuItem, Button } from '@fluentui/react-components';
import { SignOut20Regular } from '@fluentui/react-icons';
import UserAvatar from '@/components/user-avatar/UserAvatar';
import { useSession, signOut, signIn } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function UserMenu() {
    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        const { loggedOut } = router.query;
        if (loggedOut) {
            signOut({ redirect: false }).then(() => {
                router.replace(router.pathname, undefined, { shallow: true });
            });
        }
    }, [router]);

    const logout = async () => {
        const query = new URLSearchParams();
        query.set('client_id', process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID as string);
        query.set('logout_uri', 'http://localhost:3000?loggedOut=true');
        window.location.assign(`${process.env.NEXT_PUBLIC_AUTHORIZATION_SERVER_URL}/logout?${query.toString()}`);
    };

    return (
        <Menu positioning="below-end" hasIcons>
            <MenuTrigger disableButtonEnhancement>
                <Button appearance="transparent" shape="circular" size="small">
                    <UserAvatar />
                </Button>
            </MenuTrigger>
            <MenuPopover>
                <MenuList>
                    {!session && (
                        <MenuItem onClick={() => signIn('cognito')}>
                            <Text>Login</Text>
                        </MenuItem>
                    )}
                    {session && (
                        <>
                            <MenuItem>
                                <Text>Profile</Text>
                            </MenuItem>
                            <MenuItem icon={<SignOut20Regular />} onClick={logout}>
                                <Text>Logout</Text>
                            </MenuItem>
                        </>
                    )}
                </MenuList>
            </MenuPopover>
        </Menu>
    );
}
