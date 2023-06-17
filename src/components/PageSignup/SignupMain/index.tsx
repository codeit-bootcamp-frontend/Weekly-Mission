import Link from 'next/link'
import Button from '@/components/Button'

const SignupMain = () => {
  return (
    <main>
      <Link href="/">
        <div />
      </Link>
      <div>
        {'이미 회원이신가요? '}
        <Link href="/signin">
          로그인 하기
        </Link>
      </div>
      <form>
        <input />
        <input />
        <Button type="submit">
          회원가입
        </Button>
      </form>
      <div />
    </main>
  )
}

export default SignupMain
