import { PlayArrowIcon } from '@ieum/components/icons';
import { Card } from '@ieum/components/ui';

import * as styles from './page.css';
import Pagination from '../_components/Pagination';

type DatabaseDetailPageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ p: string }>;
};

const DatabaseDetailPage = async ({ params, searchParams }: DatabaseDetailPageProps) => {
  const { id } = await params;
  const { p } = await searchParams;
  const page: number = p ? Number(p) : 1;

  return (
    <>
      <p className={styles.script}>
        어제 친구랑 같이 동네 산책을 나갔다가 우연히 작은 꽃집을 발견했는데, 사장님이 정말
        친절하시더라고요. 그래서 거기서 작은 화분 하나를 사왔어요.
      </p>

      <div className={styles.scriptDetail}>
        <Card asChild>
          <ul className={styles.metadata}>
            <li>
              <h3>제시문 고유 번호</h3>
              <p>{id}</p>
            </li>
            <li>
              <h3>제시문 생성</h3>
              <p>2025년 1월 26일</p>
            </li>
            <li>
              <h3>최근 기여 업데이트</h3>
              <p>3시간 전</p>
            </li>
            <li>
              <h3>기여 횟수</h3>
              <p>5</p>
            </li>
            <li>
              <h3>평균 발화 길이</h3>
              <p>5.3초</p>
            </li>
          </ul>
        </Card>

        <Card className={styles.contribution}>
          <ul>
            <li>
              <div>
                <p className={styles.contributionIndex}>{1}</p>
                <div className={styles.contributionMetadata}>
                  <p className={styles.contributionDate}>2025. 01. 26. 23:59</p>
                  <p className={styles.contributionTitle}>멋쟁이 프로도</p>
                </div>
              </div>
              <button>
                <PlayArrowIcon size={24} />
              </button>
            </li>
            <li>
              <div>
                <p className={styles.contributionIndex}>{2}</p>
                <div className={styles.contributionMetadata}>
                  <p className={styles.contributionDate}>2025. 01. 26. 23:59</p>
                  <p className={styles.contributionTitle}>멋쟁이 프로도</p>
                </div>
              </div>
              <button>
                <PlayArrowIcon size={24} />
              </button>
            </li>
            <li>
              <div>
                <p className={styles.contributionIndex}>{3}</p>
                <div className={styles.contributionMetadata}>
                  <p className={styles.contributionDate}>2025. 01. 26. 23:59</p>
                  <p className={styles.contributionTitle}>멋쟁이 프로도</p>
                </div>
              </div>
              <button>
                <PlayArrowIcon size={24} />
              </button>
            </li>
            <li>
              <div>
                <p className={styles.contributionIndex}>{4}</p>
                <div className={styles.contributionMetadata}>
                  <p className={styles.contributionDate}>2025. 01. 26. 23:59</p>
                  <p className={styles.contributionTitle}>멋쟁이 프로도</p>
                </div>
              </div>
              <button>
                <PlayArrowIcon size={24} />
              </button>
            </li>
          </ul>

          <Pagination total={6} current={page} perPage={5} />
        </Card>
      </div>
    </>
  );
};

export default DatabaseDetailPage;
