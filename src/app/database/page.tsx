import Pagination from './_components/Pagination';
import * as styles from './page.css';

type DatabasePageProps = {
  searchParams: Promise<{ p: string }>;
};

const DatabasePage = async ({ searchParams }: DatabasePageProps) => {
  const { p } = await searchParams;
  const page: number = p ? Number(p) : 1;

  return (
    <>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>연번</th>
              <th>날짜</th>
              <th>제시어</th>
              <th>기여</th>
              <th>평균 길이</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2025.02.09. 23:59</td>
              <td>
                <div className={styles.script}>
                  어제 친구랑 같이 동네 산책을 나갔다가 우연히 작은 꽃집을 발견했는데, 사장님이 정말
                  친절하시더라고요. 그래서 거기서 작은 화분...어제 친구랑 같이 동네 산책을 나갔다가
                  우연히 작은 꽃집을 발견했는데, 사장님이 정말 친절하시더라고요. 그래서 거기서 작은
                  화분...어제 친구랑 같이 동네 산책을 나갔다가 우연히 작은 꽃집을 발견했는데,
                  사장님이 정말 친절하시더라고요. 그래서 거기서 작은 화분...어제 친구랑 같이 동네
                  산책을 나갔다가 우연히 작은 꽃집을 발견했는데, 사장님이 정말 친절하시더라고요.
                  그래서 거기서 작은 화분...어제 친구랑 같이 동네 산책을 나갔다가 우연히 작은 꽃집을
                  발견했는데, 사장님이 정말 친절하시더라고요. 그래서 거기서 작은 화분...어제 친구랑
                  같이 동네 산책을 나갔다가 우연히 작은 꽃집을 발견했는데, 사장님이 정말
                  친절하시더라고요. 그래서 거기서 작은 화분...어제 친구랑 같이 동네 산책을 나갔다가
                  우연히 작은 꽃집을 발견했는데, 사장님이 정말 친절하시더라고요. 그래서 거기서 작은
                  화분...어제 친구랑 같이 동네 산책을 나갔다가 우연히 작은 꽃집을 발견했는데,
                  사장님이 정말 친절하시더라고요. 그래서 거기서 작은 화분...어제 친구랑 같이 동네
                  산책을 나갔다가 우연히 작은 꽃집을 발견했는데, 사장님이 정말 친절하시더라고요.
                  그래서 거기서 작은 화분...
                </div>
              </td>
              <td>120</td>
              <td>7.9</td>
            </tr>
            <tr>
              <td>2</td>
              <td>2025.01.26. 15:58</td>
              <td>
                <div className={styles.script}>
                  여수해양경찰서는 9일 브리핑에서 구조된 베트남 선원들에게 확인한 결과 항해 중
                  갑자기 배가 심하게 왼쪽으로 기울면서 전복된 것으로 보인다며 조타실 등 선내에 있던
                  3명을 제외한 나머지 승선원 11명은 모두 바다로 뛰어들었다고 설명했다.
                </div>
              </td>
              <td>120</td>
              <td>7.9</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Pagination total={10} current={page} perPage={5} />
    </>
  );
};

export default DatabasePage;
