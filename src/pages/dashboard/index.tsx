import * as React from 'react';
import { GetServerSideProps } from 'next';
import { NextPageWithLayout } from '@/pages/_app';
import { DefaultLayout } from '@/layouts';

const Index: NextPageWithLayout = () => <div>Dashboard page</div>;

Index.getLayout = (page: React.ReactElement) => (
  <DefaultLayout>{page}</DefaultLayout>
);

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return {
    props: {},
  };
};

export default Index;