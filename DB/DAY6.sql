SELECT ENAME, DEPTNO, 
CASE WHEN DEPTNO = 10 THEN 'New York'
	 WHEN DEPTNO = 20 THEN 'Dallas'
	 ELSE 'UNKOWN'
	 END AS LOC_NAME
FROM EMP
WHERE JOB = 'MANAGER';


--직종이 'IT_PROG'인 사람들의 평균급여

SELECT AVG(SALARY)
FROM EMPLOYEES
WHERE JOB_ID = 'IT_PROG';

SELECT AVG(CASE JOB_ID WHEN 'IT_PROG' THEN SALARY END)
FROM EMPLOYEES e;
--CASE와 WHEN 사이에 비교하고자 하는 컬럼을 넣고 
--WHEN과 THEN 사이에 비교하고자 하는 값을 넣어서 비교하는 방법

--EMP 테이블에서 SAL이 3000이상이면 HIGH, 1000이상이면 MID
-- 둘다 아니면 LOW를 사원명(ENAME), 급여(SAL), 등급(GRADE)순으로 조회
SELECT ENAME, SAL,
CASE WHEN SAL >= 3000 THEN 'HIGH'
	 WHEN SAL >= 1000 THEN 'MID'
	 ELSE 'LOW'
	 END AS GRADE
FROM EMP;

--STADIUM 테이블에서 SEAT_COUNT(좌석수)가 0 이상 30000이하면 'S'
--30001이상 50000이하면 'M' 다 아니면 'L'을
--경기장이름, 좌석수, 크기순으로 조회
SELECT STADIUM_NAME, SEAT_COUNT,
CASE WHEN SEAT_COUNT <= 30000 THEN 'S'
	 WHEN SEAT_COUNT >= 30001 AND SEAT_COUNT <= 50000 THEN 'M'
	 ELSE 'L'
	 END AS SEATSIZE
FROM STADIUM s;

--PLAYER 테이블에서 WEIGHT가 50이상 70이하이면 'L'
--71이상 80이하면 'M' NULLL이면 '미등록' 다 아니면 'H'
-- 선수이름, 몸무게(단위붙이기), 크기순으로 조회

SELECT PLAYER_NAME, WEIGHT||'KG',
CASE WHEN WEIGHT BETWEEN 50 AND 70 THEN 'L'
	 WHEN WEIGHT BETWEEN 71 AND 80 THEN 'M'
	 WHEN WEIGHT IS NULL THEN '미등록'
	 ELSE 'H'
	 END AS 체급
FROM PLAYER; 


SELECT * FROM PLAYER p;0

-- 오라클에서 콘솔로 데이터를 확인하는 법


DBMS_OUTPUT.PUT_LINE('출력할 내용');
-- 변수의 선언
DECLARE
NAME VARCHAR2(20) := '홍길동';
AGE NUMBER(3) := 30;
BEGIN
	DBMS_OUTPUT.PUT_LINE('이름 : '|| NAME ||CHR(10)||'나이 : '|| AGE);
END;


-- 점수에 맞는 학점 출력하기

-- 변수
-- SCORE 변수에는 80점 대입
-- GRADE 
-- 당신의 점수 : XX점
-- 학점 : B

DECLARE
SCORE NUMBER := 45;
GRADE VARCHAR2(10);
BEGIN
	IF SCORE >= 90 THEN GRADE :='A';
	ELSIF SCORE >=80 THEN  GRADE :='B';
	ELSIF SCORE  >=70 THEN GRADE :='C';
	ELSIF SCORE >= 60 THEN GRADE :='D';
	ELSIF SCORE <= 59 THEN GRADE :='F';
	END IF;
DBMS_OUTPUT.PUT_LINE('당신의 점수는 : '|| SCORE || ' 점,'|| ' 학점은 ' || GRADE);
END;

BEGIN
	FOR I IN 1..4 LOOP
		IF MOD(I,2) = 0 THEN
		DBMS_OUTPUT.PUT_LINE(I|| '는 짝수!');
		ELSE
		DBMS_OUTPUT.PUT_LINE(I|| '는 홀수!');
		END IF;
	END LOOP;

END;


-- NUM1 변수 선언, 1을 대입
-- WHILE문으로 1부터 10까지의 총합을 출력하세요
DECLARE
NUM1 NUMBER := 1;
TOTAL NUMBER := 0;
BEGIN
	WHILE(NUM1 <=10)
	LOOP
	TOTAL := TOTAL + NUM1;
	NUM1 := NUM1+1;
	END LOOP;	
	DBMS_OUTPUT.PUT_LINE('총 합 : '||TOTAL);
END;


--F(X) = 2X + 1;
--프로시저명 F
-- 매개변수 X
-- 출력결과 X : 0, Y : 0

CREATE OR REPLACE PROCEDURE F --프로시저 이름
(
	X  IN NUMBER --외부에서 전달받을 값이 있으면 매개변수에 정리를 해놓는다.
	   --(외부에서 전달을 받을거라면 IN을 써야 한다.IN은 생략이 가능하다)
)
IS --IS영역에다가 연산을 할껄 써야되는데 2X+1를 쓸껀데 변수를 선언할 필요는 없다.
BEGIN 
	DBMS_OUTPUT.ENABLE;
	DBMS_OUTPUT.PUT_LINE(2*X+1);
END;

호출 CALL F(2);


SELECT * FROM JOBS; ---> 4개의 컬럼값을 갖고 있는걸 확인할 수 있다.

CREATE OR REPLACE PROCEDURE MY_NEW_JOB_PROC ---> 프로시저 이름이 조금 길긴한데 프로시저의 기능을 잘 설명하기 위해서는 조금 길어져도 상관이 없다.
(
	--우리가 해당 테이블에 INSERT를 하기 위해서는 컬럼이 4개니까 4개의 값을 외부에서 받아야한다.
	--그런데 사용자가 무슨 값을 넣을지 예측할 수 없다. 그렇기 때문에 CALL할때 전달해주는 값을 받아줄 매개변수가 있어야 한다.

	P_JOB_ID IN JOBS.JOB_ID%TYPE, --->JOB_ID의 타입을 그대로 가져가겠다.
	P_JOB_TITLE IN JOBS.JOB_TITLE%TYPE,
	P_MIN_SALARY IN JOBS.MIN_SALARY%TYPE,
	P_MAX_SALARY IN JOBS.MAX_SALARY%TYPE
)
IS
	CNT NUMBER := 0;
BEGIN
	--JOBS 테이블에 매개변수로 받은 JOB_ID가 존재하는지 개수를 세는 쿼리문 작성하기
	-- 쿼리문을 통해 나온 결과를 CNT변수에 대입하겠다.
	SLECT COUNT(JOB_ID)
	FROM JOBS
	WHERE JOB_ID = P_JOB_ID;

-- CNT가 0일 때는 INSERT하고, 1이면 UPDATE하기
IF CNT = 0 THEN 
		INSERT INTO JOBS(JOB_ID,JOB_TITLE,MIN_SALARY, MAX_SALARY) 
		VALUES(P_JOB_ID,P_JOB_TITLE,P_MIN_SALARY,P_MAX_SALARY);
		DBMS_OUTPUT.ENABLE;
		DBMS_OUTPUT.PUT_LINE('INSERT ALL DONE ABOUT '||' '||P_JOB_ID);
ELSE
		UPDATE JOBS --사용자가 전달한 PK값이 중복이 있기 때문에 오게 되는 것
			--그렇기 때문에 이미 있는 값을 추가하는게 아니고 수정해주겠다
		SET
		JOB_TITLE = P_JOB_TITLE,
		MIN_SALARY = P_MIN_SALARY,
		MAX_SALARY = P_MAX_SALARY
		WHERE JOB_ID = P_JOB_ID;
		DBMS_OUTPUT.ENABLE;
		DBMS_OUTPUT.PUT_LINE('UPDATE ALL DONE ABOUT '||' '||P_JOB_ID);
	END IF;
END;

CREATE OR REPLACE PROCEDURE DEL_JOB_PROC
(
	P_JOB_ID IN JOBS.JOB_ID%TYPE --보통 DELETE를 하면 하나의 행을 삭제하는데 중복되는 값이 있으면 안되기 때문에 PK 값을 매개변수로 받아서 삭제해보자.
)
IS
	CNT NUMBER := 0;
BEGIN
	SELECT COUNT(JOB_ID) INTO CNT
	FROM JOBS WHERE JOB_ID = P_JOB_ID; 값이 있는지 없는지 검사를 해야하기 때문에 CNT에 넣어주자.
	IF CNT !=0 THEN 0이 아니라는 것은 삭제할 JOB_ID가 존재하고 있다. 삭제해주자.
		DELETE FROM JOBS
		WHERE JOB_ID = P_JOB_ID;
		DBMS_OUTPUT.ENABLE;
		DBMS_OUTPUT.PUT_LINE('DELETE ALL DONE ABOUT '||' '||P_JOB_ID);
	ELSE
		DBMS_OUTPUT.ENABLE;
		DBMS_OUTPUT.PUT_LINE('NO EXIST '||' '||P_JOB_ID);
	END IF;
END;

CALL MY_NEW_JOB_PROC('IT','Developer',5000,20000);

-- SEQUENCE
-- 테이블에 값을 추가할 때 자동으로 순차적인 정수값이 들어가도록 설정해주는 객체
CREATE TABLE TBL_USER(
	IDX NUMBER PRIMARY KEY,
	NAME VARCHAR2(50)
);

시퀀스 생성

CREATE SEQUENCE SEQ_USER;
INSERT INTO TBL_USER VALUES(SEQ_USER.NEXTVAL, '홍길동');
INSERT INTO TBL_USER VALUES(SEQ_USER.NEXTVAL, '김길동');
INSERT INTO TBL_USER VALUES(SEQ_USER.NEXTVAL, '이길동');
INSERT INTO TBL_USER VALUES(SEQ_USER.NEXTVAL, '박길동');

SELECT * FROM TBL_USER;











