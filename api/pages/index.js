import React, { useEffect } from 'react';

import {
  FacebookIcon,
  WhatsappIcon,
  TwitterIcon,
} from 'react-share';

import analytic from '../util/analytic';

import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Countries from '../components/Countries';


function Home() {
  useEffect(() => {
    analytic.pageview('/');
  }, []);

  return (
    <Layout className="container">
      <NavBar />

      <main>
        <br />
        <h2>Sobre</h2>
        <p className="description">
          Notificação de casos de doença pelo coronavírus 2019 (COVID-19) no Brasil e mundo.
        </p>
        <br />
        <div className="grid">
          <Card
            link="https://github.com/devarthurribeiro/covid19-brazil-api/"
            title="Documentação &rarr;"
            description="Veja a doc da api 📝"
          />
          <Card
            link="https://github.com/devarthurribeiro"
            title="Autor &rarr;"
            description="@devarthurribeiro 👨🏻‍💻"
          />
        </div>
        <br />
        <h2>
          <a href="./status">Acompanhe &rarr;</a>
        </h2>
        <Countries />
        <h2>
          <a href="https://github.com/devarthurribeiro/covid19-brazil-api/#contribuidores">
            Equipe &rarr;
          </a>
        </h2>
        <div className="flex-center team">
          <div className="person">
            <a href="https://github.com/devarthurribeiro">
              <img src="https://avatars1.githubusercontent.com/u/12974798?s=460&u=6a69934913c6f56d74fdf9c80793881d4cfb7bf6&v=4" alt="Arthur Ribeiro" />
            </a>
            <h3>Arthur Ribeiro</h3>
            <span>Autor</span>
            <p>
              I love creating things.
            </p>
            <div className="flex-center">
              <a href="http://wa.me/5584991230249">
                <WhatsappIcon
                  size={40}
                  round
                />
              </a>
              <a href="https://www.facebook.com/devarthuribeiro">
                <FacebookIcon size={40} round />
              </a>
              <a href="https://twitter.com/devArthurR">
                <TwitterIcon size={40} round />
              </a>
            </div>
          </div>
        </div>
        <br />
      </main>


      <Footer />

      <style jsx>
        {`
      .container {
        min-height: 100vh;
        padding: 0 .75em
      }

      .team h3, p {
        margin: 8px
      }

      .team span {
        margin-bottom: 6px;
        color: #818181;
      }

      .team img {
        width: 160px;
        heigth: auto;
        border-radius: 50%;
      }

      .team .person {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .description {
        font-size: 1.5rem;
        color: #818181;
      }

    `}
      </style>
    </Layout>
  );
}

export default Home;
