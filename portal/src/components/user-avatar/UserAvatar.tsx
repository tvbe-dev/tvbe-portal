import useIsDesktop from '@/hooks/useIsDesktop';
import { useSession } from 'next-auth/react';
import { Persona } from '@fluentui/react-components';
import React from 'react';

type UserAvatarProps = {
    onClick?(e: React.MouseEvent<HTMLElement>): void;
};

export default function UserAvatar({ onClick }: UserAvatarProps) {
    const { data: session } = useSession();
    const isDesktop = useIsDesktop();
    return (
        <>
            {session ? (
                <Persona
                    onClick={onClick}
                    name={isDesktop ? session.user.name : undefined}
                    secondaryText={isDesktop ? session.user.email : undefined}
                    presence={{ status: 'available' }}
                    avatar={{
                        image: {
                            src: session.user.image.data.url
                        }
                    }}
                />
            ) : (
                <Persona name={isDesktop ? 'Guest' : undefined} />
            )}
        </>
    );
}
