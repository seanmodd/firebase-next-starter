import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress';
import { DefaultSeo } from 'next-seo';
import { Box, Button, ChakraProvider, HStack, VStack } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import SEO from 'next-seo.config';
import theme from 'styles/theme';
import GlobalStyle from 'styles/styles';
import 'styles/css/nprogress.css';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-react';
import { useEffect } from 'react';
import firebase from 'firebase/app';
import Footer from 'components/other/Footer';
import Home from 'components/other/Home';
import { config } from '../config/firebase.js';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const MotionBox = motion(Box);

if (!firebase.apps.length) {
  firebase.initializeApp(config);
} else {
  firebase.app();
}

const clerkFrontendApi = process.env.NEXT_PUBLIC_CLERK_FRONTEND_API;
const clerkSignInURL = process.env.NEXT_PUBLIC_CLERK_SIGN_IN;

const publicPages = [];

function RedirectToSignIn() {
  useEffect(() => {
    window.location = clerkSignInURL;
  });
  return null;
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <ClerkProvider
      frontendApi={clerkFrontendApi}
      navigate={(to) => router.push(to)}
    >
      <ChakraProvider resetCSS theme={theme}>
        <DefaultSeo {...SEO} />

        <GlobalStyle>
          {/* <Star /> */}

          <AnimatePresence exitBeforeEnter>
            <MotionBox
              key={router.route}
              animate="enter"
              as="main"
              exit="exit"
              flexGrow={1}
              initial="initial"
              variants={{
                initial: { opacity: 0, y: -10 },
                enter: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: 10 },
              }}
            >
              {publicPages.includes(router.pathname) ? (
                <Component {...pageProps} />
              ) : (
                <>
                  <SignedIn>
                    <Component {...pageProps} />
                  </SignedIn>
                  <SignedOut>
                    <RedirectToSignIn />
                  </SignedOut>
                </>
              )}
            </MotionBox>
          </AnimatePresence>
          <Footer />
        </GlobalStyle>
      </ChakraProvider>
    </ClerkProvider>
  );
}

export default MyApp;
