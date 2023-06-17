import Link from 'next/link'
import Button from '@/components/Button'

const SigninMain = () => {
  return (
    <main>
      <Link href="/">
        <div />
      </Link>
      <div>
        {'회원이 아니신가요? '}
        <Link href="/signup">
          회원 가입하기
        </Link>
      </div>
      <form>
        <input />
        <input />
        <Button type="submit">
          로그인
        </Button>
      </form>
      <div>
        <Link href="/fotgot-password">
          비밀번호 찾기
        </Link>
      </div>
      <div />
    </main>
  )
}

export default SigninMain
