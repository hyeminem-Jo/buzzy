import React from 'react';
// import '.../styles/global.css'
import PropTypes from "prop-types";
import Head from "next/head";

import wrapper from "../store";
import {Provider} from "react-redux";

const Buzzy = ({ Component, ...rest }) => {
  const {store, props} = wrapper.useWrappedStore(rest)
  return (
    <Provider store={store}>
      <Head>
        <meta charSet="utf-8" />
        <title>Buzzy</title>
      </Head>
      <Component {...props.pageProps} />
    </Provider>
  );
};

Buzzy.propTypes = {
  Component: PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(Buzzy); // withRedux HOC 로 컴포넌트 감싸기
// -> 이제 각 페이지에서 getStaticProps, getServerSideProps 등 함수 내에서 스토어의 접근이 가능해짐