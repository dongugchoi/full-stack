-- 10번 및 30번 부서에 속하는 모든 사원 중 급여가 1500을 넘는 사원의
-- 사원번호, 이름 및 급여를 조회하세요

SELECT DEPARTMENT_ID , FIRST_NAME , SALARY 
FROM EMPLOYEES WHERE DEPARTMENT_ID IN(10,30) AND SALARY >=1500

-- 관리자가 없는 모든 사원에 이름 및 직종을 출력하세요
SELECT FIRST_NAME,JOB_ID 
FROM EMPLOYEES WHERE  MANAGER_ID IS NULL

-- 직업이 IT_PROG 또는 SA_MAN이면서 급여가 1000,3000,5000이 아닌 사원들의
-- 이름, 직종 및 급여를 조회

SELECT FIRST_NAME,JOB_ID,SALARY 
FROM EMPLOYEES WHERE JOB_ID IN('IT_PROG','SA_MAN') AND SALARY NOT IN(1000,3000,5000);

-- TBL_STUDENT
-- 학번, 이름, 전공, 성별, 생일
INSERT INTO TBL_STUDENT (ID, NAME, MAJOR, GENDER, BIRTH)
VALUES (1,'박디비','컴퓨터;공학과','W','1990-02-06');

SELECT * FROM TBL_STUDENT

--DEFAULT값 사용해보기
INSERT INTO TBL_STUDENT (ID, NAME, MAJOR, BIRTH)
VALUES (2,'홍길동','컴퓨터공학과','1994-08-26');

--성별의 DEFAULT값 W가 들어간다.
SELECT * FROM TBL_STUDENT

--INSERT할 때 컬럼명을 생략하면 DEFAULT값을 넣을 수 없다.
INSERT INTO TBL_STUDENT
VALUES (3,'이자바','컴퓨터공학과','W','1994-08-26')


-- FLOWER테이블에 데이터 넣기
SELECT * FROM FLOWER

--꽃이름
--꽃색깔
--가격
--장미꽃, 빨간색, 3000
INSERT INTO FLOWER(F_NAME,F_COLOR,F_PRICE)
VALUES('장미꽃','빨간색',3000)

INSERT INTO FLOWER(F_NAME,F_COLOR,F_PRICE)
VALUES('해바라기','노란색',2000)

INSERT INTO FLOWER(F_NAME,F_COLOR,F_PRICE)
VALUES('튤립','흰색',4000)

-- POT 테이블에 데이터 추가하기

-- 화분번호, 화분색, 화분모양, 꽃이름
-- 꽃 이름에는 FLOWER 테이블에 있는 꽃 이름만 추가 가능
INSERT INTO POT (P_NUM,P_COLOR,P_SHAPE,F_NAME)
VALUES (1,'갈색','네모','장미꽃');

SELECT * FROM POT

CREATE TABLE FLOWER2(
	F_NAME2 VARCHAR2(200) PRIMARY KEY,
	F_COLOR2 VARCHAR2(100),
	F_PRICE2 NUMBER
);


INSERT INTO FLOWER2(F_NAME2, F_COLOR2, F_PRICE2)
SELECT F_NAME, F_COLOR, F_PRICE
FROM FLOWER
WHERE F_PRICE >= 3000;

DROP TABLE FLOWER2;
SELECT * FROM FLOWER2;


--여러 테이블에 여러 데이터를 추가하는 것도 가능

INSERT ALL
	INTO FLOWER VALUES('개나리','노라색',5000)
	INTO FLOWER2 VALUES('계란꽃','흰색',7000)
SELECT * FROM DUAL;
	
SELECT * FROM FLOWER;
SELECT * FROM FLOWER2;

-- 가상의 테이블로 확인할때도 사용이 가능하다.
SELECT SYSDATE FROM DUAL;

SELECT * FROM POT;
-- PK와 FK로 연결된 테이블에서 외래키로 참조되고 있는 데이터는 
-- 부모테이블에서 삭제가 불가능 하다.

-- FK가 속해있는 자식테이블의 내용을 지우고 PK가 있는 부모를 지울 수 있다.
DELETE FROM POT WHERE F_NAME = '장미꽃'

-- STUDENT 테이블에서 이름이 홍길동인 사람 삭제하기
SELECT * FROM TBL_STUDENT;
DELETE FROM TBL_STUDENT WHERE NAME = '홍길동'; 

--학생테이블에서 학번 1번인 학생의 이름을 홍길동으로 성별을 남자로 수정하기
UPDATE TBL_STUDENT
SET NAME ='홍길동',
 GENDER ='M'
WHERE ID = 1

-- 회원과 관련된 기능
-- 로그인 -> SELECT
-- 회원가입 -> INSERT
-- 회원정보수정 -> UPDATE
-- 회원 탈퇴 -> DELETE

-- 상품과 관련된 기능
-- 검색 -> SELECT
-- 상품추가 -> INSERT
-- 재고처리(100 -> 99) -> UPDATE
-- 판매 & 상품삭제 -> DELETE


-- 사원테이블에서 급여를 많이 받는 순서대로 ㅅㅏ번, 이름, 급여 입사일순으로 출력하되
-- 급여가 같은 경우 입사일이 빠른 순으로 정렬

SELECT EMPLOYEE_ID , FIRST_NAME , SALARY , HIRE_DATE 
FROM EMPLOYEES
ORDER BY SALARY DESC, HIRE_DATE ASC;
--컬럼의 순서를 알고 있다면 번호로 정렬할 수 있다.
--ORDER BY '8' DESC, '6' ASC;

--사원테이블에서 부서번호가 빠른순, 부서번호가 같다면 직종이 빠른순(오름차), 직종도 같다면 급여를 많이 받는 순으로
SELECT EMPLOYEE_ID ,FIRST_NAME,DEPARTMENT_ID ,JOB_ID ,SALARY 
FROM EMPLOYEES 
ORDER BY DEPARTMENT_ID ASC, JOB_ID ASC, SALARY DESC;

-- 입사일이 빠른 순으로 급여가 15000이상인 사원들의 사번,이름,급여,입사일 조회
SELECT EMPLOYEE_ID, FIRST_NAME, SALARY, HIRE_DATE 
FROM EMPLOYEES
WHERE SALARY >=15000
ORDER BY HIRE_DATE; 

-- 문자와 관련된 함수

-- ASCII()
-- 지정된 문자의 ASCII값을 반환한다.
SELECT ASCII('A') FROM DUAL;

-- CHR()
--지정된 숫자의 ASCII문자를 반환한다.
SELECT CHR(65) FROM DUAL;

-- RPAD(데이터, 고정길이, 문자)
-- 데이터를 왼쪽으로 몰아서 정렬 후 생긴 빈 공백에 특정 문자를 채워 반환
SELECT RPAD(DEPARTMENT_NAME ,10,'*') FROM DEPARTMENTS;

-- LPAD(데이터, 고정길이, 문자)
-- 데이터를 오쪽으로 몰아서 정렬 후 생긴 빈 공백에 특정 문자를 채워 반환
SELECT  LPAD(DEPARTMENT_NAME, 10, '*') FROM DEPARTMENTS;

-- TRIM()
-- 문자열의 공백문자들을 삭제한다.

SELECT TRIM ('    TRIM      ') FROM DUAL;

--RTRIM()
--오른쪽공백제거
--LTRIM()
--왼쪽공백제거

-- INSTR()
-- 특정문자의 위치를 반환
SELECT INSTR('HELLOW', 'O') FROM DUAL;

-- INSTR(데이터, 찾을문자, 검색위치, 몇번째 나오는지)
SELECT INSTR('HELLOW', 'L',1,2) FROM DUAL;

-- 찾는 문자열이 없으면 0을 반환한다.
SELECT INSTR('HELLOW', 'Z') FROM DUAL;

-- INITCAP()
-- 첫 문자를 대문자로 변환하는 함수
SELECT INITCAP('good morning') FROM dual;
SELECT INITCAP('good/morning') FROM dual;

-- LENGTH()
-- 주어진 문자열의 길이를 반환
SELECT LENGTH('JHON') FROM DUAL;

--CONCAT()
--주어진 두 문자열을 연결하기
SELECT CONCAT('HELLOW ', 'WORLD') FROM DUAL;

--SUBSTR()
--문자열의 시작 위치부터 길이만큼 자른 후 반환
-- 길이는 생략 가능하며, 생략 시 문자열의 끝까지 반환한다.
SELECT SUBSTR('Hello Oracla',2), substr('Hello Oracle',7,5)
FROM dual;

-- REPLACE(데이터, 원래글자, 바꿀글자)
SELECT REPLACE('GOOD MORNING', 'MORNING', ' EVENING') FROM DUAL;

--UPPER()
--주어진 문자열을 전부 대문자로 바꾼다.
SELECT UPPER('good morning') FROM DUAL;
SELECT LOWER('GOOD MORNING') FROM DUAL;

--부서번호가 50번인 사원들의 이름을 출력하되 이름이 'el'을 모두 '**'로 대체하여 출력하세요
SELECT REPLACE(FIRST_NAME,'el','**')
FROM EMPLOYEES
WHERE DEPARTMENT_ID =50;


-- 이름이 6글자 이상인 사원의 사번과 이름, 급여를 출력
SELECT EMPLOYEE_ID ,FIRST_NAME , SALARY 
FROM EMPLOYEES
WHERE length(FIRST_NAME) >= 6;

-- 'H E L L O' 의 공백을 모두 제거하여 출력
SELECT REPLACE ('H E L L O',' ','') FROM DUAL; 

CREATE TABLE PRODUCT2(
	P_NO NUMBER PRIMARY KEY, -- 제품번호, 숫자, 기본키
	P_NAME VARCHAR2(100) NOT NULL, -- 제품명, 문자열, 최대 100바이트, 필수
	P_PRICE NUMBER, -- 제품가격, 숫자
	P_DATE DATE -- 생산일자, 날짜
);

DROP TABLE PRODUCT2;

INSERT INTO PRODUCT2 (P_NO, P_NAME, P_PRICE,P_DATE)
VALUES(1000,'컴퓨터',100, '21/04/15');

INSERT INTO PRODUCT2 (P_NO, P_NAME, P_PRICE,P_DATE)
VALUES(1002,'냉장고',200,'21/03/29');

INSERT INTO PRODUCT2 (P_NO, P_NAME, P_PRICE,P_DATE)
VALUES(1003,'에어컨',300,'20/12/15');

INSERT INTO PRODUCT2 (P_NO, P_NAME, P_PRICE,P_DATE)
VALUES(1004,'오디오',20,'20/12/15');

INSERT INTO PRODUCT2 (P_NO, P_NAME, P_PRICE,P_DATE)
VALUES(1001,'세탁기',60,'21/04/15');

SELECT * FROM PRODUCT2;

--NO가 1000인 데이터의 PRICE를 20 증가시키세요

UPDATE PRODUCT2 SET
P_PRICE = P_PRICE + 20
WHERE P_NO = 1000;

DELETE FROM PRODUCT2
WHERE P_NAME = '세탁기';

SELECT * FROM PRODUCT2 ORDER BY P_PRICE DESC;

SELECT * FROM PRODUCT2;
