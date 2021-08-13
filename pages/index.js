import Head from 'next/head';
import Image from 'next/image';
import { Heading, HStack, VStack } from '@chakra-ui/react';
import WriteToCloudFirestore from 'components/cloudFirestore/Write';
import ReadToCloudFirestore from 'components/cloudFirestore/Read';
import ReadDataFromCloudFirestore from 'components/cloudFirestore/Read';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <ReadToCloudFirestore /> */}
      <Heading>My Next.js with Firebase.</Heading>
      <VStack spacing={18} mt={10}>
        <WriteToCloudFirestore />
        <ReadDataFromCloudFirestore />
      </VStack>
    </div>
  );
}
