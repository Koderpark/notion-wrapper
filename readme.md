# notion-wrapper

- 과하게 내용물이 많은 노션 API의 response value를 정리해서 반환합니다.
- typescript에서 사용하기 편하도록 합니다.

# goals

- [ ] Notion API 반환값에 대한 타입 wrapping
  - 정의되어있는데도 공식 API에서 사용되지 않는 타입들을 가져옴.
  - 불필요하게 복잡하게 정의된 타입들을 간소화 및 narrowing.
- [ ] 과하게 많은 값들을 쳐낸 response 타입 정의
- [ ] Query A Database에 대응하는 함수 제작
- [ ] 객체에 API key / db id 저장 가능하게 하기.
- [ ] Query Rate Limiting에 맞춰 caching 고민해보기.
