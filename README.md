# AI-wonderland 

## 1.소개
- 프로젝트명 : AI Wonderland
- 한 줄 소개 : 2000-2010년대(재해석 된) 쇼핑몰로의 시간 여행
- 타게층 : 레트로 패션을 좋아하는 MZ 세대

## 2.스토리보드
[_final_v5.pdf](https://github.com/inistory/AI-wonderland/files/7684105/_final_v5.pdf)


## 3.Data preprocessing 
Data preprocessing Repo : [amazon-fashion-data-description-generation](https://github.com/inistory/amazon-fashion-data-description-generation)

## 4.프로젝트 구성

1. Datasets : 아마존 상품&리뷰 metadata
2. 기술 스택 및 라이브러리
`GPT-2` `Scikit-learn` `TF-IDF` `Linear regression` `Keras` `TensorFlow` `Huggingface` `React` `Django` `MariaDB`
| 분류           | Tools                    | 목적                                   |
|----------------|--------------------------|----------------------------------------|
| Front-server   | React, recoil            | 웹 프론트 서버 구동                    |
| Backend-env    | Docker                   | 배포 환경 세팅                         |
| Backend-server | Django, MariaDB, MongoDB | 웹 백엔드 서버 구동, 상품 및 회원 정보 |
| AI             | Tensorflow               | 데이터셋 분석 및 추천 로직 구현        |

## 5. 구현 기능
- 구현해야 하는 세부 기능들을 명세하고, 우선순위를 설정합니다. 이후 우선순위를 바탕으로 개발을 진행합니다.
- 이후 구현된 기능에 알맞는 스크린샷, 영상 등을 추가합니다.
1. 필수 구현
  - 1순위 : 회원가입 / 로그인 구현
  - 2순위 : 아마존 상품 데이터 기반 상품상세페이지 구현
  - 3순위 : AI 기반 유저 반응 분석 구현

