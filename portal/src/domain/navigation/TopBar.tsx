import UserMenu from '@/components/user-menu/UserMenu';
import useIsDesktop from '@/hooks/useIsDesktop';
import { Button, makeStyles, shorthands, Title1 } from '@fluentui/react-components';
import { Navigation24Regular } from '@fluentui/react-icons';
import { useSession } from 'next-auth/react';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        ...shorthands.padding('10px', '10px')
    },

    navIconContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        '& > span': {
            ...shorthands.padding(0, '20px')
        }
    }
});

export default function TopNav() {
    const classes = useStyles();
    const { data: session } = useSession();
    const isDesktop = useIsDesktop();

    return (
        <div className={classes.container}>
            <div className={classes.navIconContainer}>
                {!isDesktop && <Button appearance="transparent" icon={<Navigation24Regular />} />}
                <Title1>TVBE</Title1>
            </div>
            <UserMenu />
        </div>
    );
}
