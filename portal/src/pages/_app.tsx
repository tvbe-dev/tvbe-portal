import {
    createDOMRenderer,
    FluentProvider,
    GriffelRenderer,
    SSRProvider,
    RendererProvider,
    webLightTheme
} from '@fluentui/react-components';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';

type EnhancedAppProps = AppProps & { renderer?: GriffelRenderer };

function MyApp({ Component, pageProps: { session, ...pageProps }, renderer }: EnhancedAppProps) {
    return (
        // 👇 Accepts a renderer from <Document /> or creates a default one
        //    Also triggers rehydration a client
        <RendererProvider renderer={renderer || createDOMRenderer()}>
            {/* @ts-ignore */}
            <SSRProvider>
                <FluentProvider theme={webLightTheme}>
                    <SessionProvider session={session}>
                        <Component {...pageProps} />
                    </SessionProvider>
                </FluentProvider>
            </SSRProvider>
        </RendererProvider>
    );
}

export default MyApp;
