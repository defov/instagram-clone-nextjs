import { useState } from 'react'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import Input from './Input'

const CredentialsForm = () => {
    
    const router = useRouter()
    const [loginForm, setLoginForm] = useState(true)
    const [error, setError] = useState('')

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [username, setUsername] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const clearForm = () => {
        setError('')
        setEmail('')
        setPassword('')
        setUsername('')
        setConfirmPassword('')
    }

    const changeForm = () => {
        clearForm()
        setLoginForm(!loginForm)
    }

    const createUser = async () => {
        const response = await fetch('/api/auth/signup', {
            method: 'POST',
            body: JSON.stringify({ email, username, password }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
      
        const data = await response.json();
      
        if (!response.ok) {
            throw new Error(data.message || 'Something went wrong!');
        }
      
        return data;
    }

    const submitForm = async (e) => {
        e.preventDefault()

        if(!loginForm) {
            try {
                const regResult = await createUser()
            } catch(error) {
                setError(error)
                return;
            }
        }

        const result = await signIn('credentials', {
            redirect: false,
            email,
            password,
        });
    
        if (!result.error) {
            clearForm()
            router.replace('/');
        } else {
            setError(result.error)
        }
    }

    return (
        <div className='flex flex-col space-y-4'>
            <div className='flex flex-col justify-center px-10 py-5 space-y-4 border'>
                <div className='relative w-48 h-16 self-center'>
                    <Image 
                        src="/images/InstagramLogo.png"
                        layout='fill'
                        objectFit='contain'
                    />
                </div>

                <form onSubmit={submitForm} className='flex flex-col space-y-3'>
                    
                    {error && (
                        <p className='text-red-400'>{error}</p>
                    )}
                    
                    <Input 
                        type="email"
                        value={email}
                        setValue={setEmail}
                        label={loginForm ? 'Enter your email...' : "Email"}
                    />

                    {!loginForm && (
                        <Input 
                            type="text"
                            value={username}
                            setValue={setUsername}
                            label="Username"
                        />  
                    )}

                    <Input 
                        type="password"
                        value={password}
                        setValue={setPassword}
                        label={loginForm ? 'Enter your password...' : 'Password'}
                    />

                    {!loginForm && (
                        <Input 
                            type="password"
                            value={confirmPassword}
                            setValue={setConfirmPassword}
                            label="Confirm password"
                        />
                    )}

                    <input 
                        className="bg-blue-500 py-1.5 rounded-[4px] text-white font-bold cursor-pointer disabled:bg-blue-300 disabled:cursor-not-allowed"
                        type="submit"
                        disabled={!(email.trim() && password.trim() && (loginForm || (username.trim() && password === confirmPassword)))}
                        value={loginForm ? 'Log In' : 'Register'} 
                    />

                </form>

                <div className='flex items-center'>
                    <span className='bg-gray-200 flex-1 h-[1px]'/>
                    <p className='mx-4 text-xs text-gray-400'>OR</p>
                    <span className='bg-gray-200 flex-1 h-[1px]'/>
                </div>

                <button className='text-blue-900 text-center font-bold flex items-center justify-center space-x-2'>
                    <Image src="/images/social-facebook-icon.png" height={18} width={18} />
                    <span>Log in with Facebook</span>
                </button>

                {loginForm && (
                    <p className='text-center text-xs text-gray-600 cursor-pointer'>Forgot password?</p>
                )}
                
            </div>

            <div className='flex align-center justify-center py-4 space-x-1 border'>
                <p>{loginForm ? "Don't have an account?" : "Already have an account?"}</p>
                <p onClick={changeForm} className='text-blue-500 font-bold cursor-pointer'>{loginForm ? 'Sign up' : 'Sign in'}</p>
            </div>
        </div>
    )
};

export default CredentialsForm
