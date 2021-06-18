import Card from 'react-bootstrap/Card';
// 전체 라이브러리를 임포트하기보단, 개별 컴포넌트를 임포트해야 성능(용량, 속도)가 좋음
import styled, { css } from 'styled-components';

// 카드 이미지 설정
const imageUrl = 'images/sample.jpg'; // 차후 url 형식으로 바꿔주어야 함

export default function ProductCard(props) {
  return (
    <Card
      style={{
        display: 'inline-flex',
        justifyContent: 'center',
        // width: 'calc(50% - 9px)',
        width: '130px',
        height: '250px',
        marginLeft: '4.5px',
        marginRight: '4.5px',
        marginBottom: '24px',
        verticalAlign: 'top',
      }}
    >
      {/* <Card style={{ styledCard }}> */}
      <Card.Img
        variant="top"
        src={imageUrl}
        style={{
          height: '100%',
          maxHeight: '150px',
          width: '100%',
          maxWidth: '130px',
        }}
      />
      <Card.Body
        style={{ padding: '10px', display: 'inline-flex', flexWrap: 'wrap' }}
      >
        <Card.Title
          style={{
            fontSize: '0.9rem',
            float: 'left',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            marginBottom: '0',
          }}
        >
          $ {props.p_price}
        </Card.Title>
        <Card.Text
          style={{
            fontSize: '0.7rem',
            float: 'left',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            marginTop: '0',
            marginBottom: '0',
          }}
        >
          {props.p_name}
        </Card.Text>
        <Card.Link herf={props.p_toDetail} style={{ flex: '1' }}>
          {/* flex: '1'을 설정해주지 않으면 오른쪽 정렬 불가능함. 주의하기! */}
          <i
            className="fas fa-shopping-cart"
            style={{
              color: 'grey',
              float: 'right',
            }}
          ></i>
        </Card.Link>
      </Card.Body>
    </Card>
  );
}
