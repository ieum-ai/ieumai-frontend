'use client';

import Image from 'next/image';

import { BrandLogo } from '@ieum/components/icons';

import * as styles from './page.css';

const AboutPage = () => {
  return (
    <div data-animate={true}>
      <div className={styles.hero}>
        <h2>한국어 음성 분석 솔루션</h2>
        <BrandLogo width={156} height={29} />
      </div>

      <section className={styles.section}>
        <div className={styles.imageContainer}>
          <Image
            src="https://static.ieumai.org/assets/about/seoul-ethan-brooke.webp"
            alt="Seoul (Photo by Ethan Brooke)"
            sizes="(max-width: 768px) 100vw, (min-width: 768px) 50vw, (min-width: 1200px) 33vw"
            fill
          />
        </div>
        <div>
          <div className={styles.sectionNumber}>
            <span>01</span>
            <div className={styles.sectionTitle}>
              <h2>개요</h2>
              <p>이음.AI</p>
            </div>
          </div>

          <div className={styles.sectionContent}>
            <p>
              발전하는 기술 시대에 음성 정보 데이터의 중요성은 나날이 높아지고 있습니다. 취득 머리
              기관에서는 이 중요성을 알릴 뿐만 아니라 사용자의 음성 데이터를 수집하기 위한 노력을
              기울이고 있습니다. 특히 한국어 사용자는 영어권 발화자에 비해 그 수가 현저히 적기
              때문에
            </p>

            <p>
              사용자가 많은 언어권 데이터와 달리 한국어 발화자는 그 수가 비교적 적다는 것에서 그
              가치는 더 &gt;&gt;
            </p>

            <p>
              영어권 데이터가 넘쳐나는 반면, 한국어 발화 데이터, 특히 발음은 절차 희귀하다고 있
              습니다. 방언은 단순한 말투가 아닙니다. 그 언어 자체의 역사, 문화, 그리고 사람들의 삶이
              녹 아 있습니다. 누군가에겐 어떤 시점 앞마다 볼 것과, 누군가에겐 고향을 떠올리며 걸 는
              따뜻한 발걸음일지도 모릅니다.
            </p>
          </div>
        </div>
      </section>

      <div className={styles.cardReverse}>
        <div className={styles.imageContainer}>
          <Image
            src="https://static.ieumai.org/assets/about/busan-markus-winkler.webp"
            alt="Busan (Photo by Markus Winkler)"
            sizes="(max-width: 768px) 100vw, (min-width: 768px) 50vw, (min-width: 1200px) 33vw"
            fill
          />
        </div>
        <div>
          <div className={styles.sectionNumber}>
            <span>02</span>
            <div className={styles.sectionTitle}>
              <h2>목표</h2>
              <p>고유 한국어 음성을 보존하다</p>
            </div>
          </div>

          <div className={styles.sectionContent}>
            <p>
              방언은 우리의 역사와 정체성을 품고 있는 소중한 문화유산입니다. 방언은 단순히 의 사소통
              수단이 아니라, 그 말을 사용하는 사람들의 삶과 문화를 고스란히 담아내는 중 요한
              기록입니다.
            </p>

            <p>
              이음 AI는 이러한 방언과 한국어 다양한 목소리가 사라지지 않도록 보존하고 기록하는 것을
              목표로 합니다. 또한는 음성 데이터를 수집하고 연구하여, 한국어의 지역적 특성 과 고유한
              발화를 생생하게 남기는 데 집중하고 있습니다.
            </p>

            <p>
              더 나아가, 방언을 활용한 콘텐츠 제작, 음성 기반 기술 개발 등을 통해 우리의 언어가
              단순한 유행이 아닌, 살아 숨 쉬는 아이디어 하이랭 수 있도록 합니다.
            </p>

            <p>
              이음 AI는 단순한 기술 프로젝트가 아니라, 사람들의 목소리를 기록하고 보존하는 문 화적
              사업입니다. 우리가 보존하는 언어의 음성, 하나의 억양, 하나의 단어가 미래 세대 에게
              소중한 유산이 될 수 있도록, 우리는 한국어 모든 목소리를 기억하고 싶습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
