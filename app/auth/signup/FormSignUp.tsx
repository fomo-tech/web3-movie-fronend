'use client'

import { api } from '@/lib/api'
import { useGoogleLogin } from '@react-oauth/google'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

type SignUpFormInputs = {
    name: string
    email: string
    password: string
    remember: boolean
}

const FormSignUp = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<SignUpFormInputs>()

    const onSubmit: SubmitHandler<SignUpFormInputs> = async (data) => {
        console.log('Form Data:', data)

    }

    const loginGoogle = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            try {
                // lấy access_token từ Google
                const { access_token } = tokenResponse
                const res = await api.post('/auth/google-login', { accessToken: access_token })
                console.log('====================================');
                console.log(res);
                console.log('====================================');

            } catch (err) {
                console.error(err)
            }
        },
        onError: () => {
            console.log('Google login error')
        },
        flow: 'implicit', // hoặc "auth-code" nếu bạn muốn code exchange
    })

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="sign__form">
            <Link href="/" className="sign__logo">
                <img src="/img/logo.svg" alt="logo" />
            </Link>

            {/* Name */}
            <div className="sign__group">
                <input
                    {...register('name', { required: 'Name is required' })}
                    type="text"
                    className="sign__input"
                    placeholder="Name"
                />
                {errors.name && <p className="error">{errors.name.message}</p>}
            </div>

            {/* Email */}
            <div className="sign__group">
                <input
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                            message: 'Invalid email address',
                        },
                    })}
                    type="email"
                    className="sign__input"
                    placeholder="Email"
                />
                {errors.email && <p className="error">{errors.email.message}</p>}
            </div>

            {/* Password */}
            <div className="sign__group">
                <input
                    {...register('password', { required: 'Password is required', minLength: 6 })}
                    type="password"
                    className="sign__input"
                    placeholder="Password"
                />
                {errors.password && <p className="error">{errors.password.message}</p>}
            </div>

            {/* Remember */}
            <div className="sign__group sign__group--checkbox">
                <input
                    id="remember"
                    type="checkbox"
                    {...register('remember')}
                />
                <label htmlFor="remember">
                    I agree to the <a href="/privacy">Privacy Policy</a>
                </label>
            </div>

            {/* Submit */}
            <button
                className="sign__btn sign__btn--big"
                type="submit"
                disabled={isSubmitting}
            >
                <span>{isSubmitting ? 'Signing up...' : 'Sign up'}</span>
            </button>

            <span className="sign__delimiter">or</span>

            <div className="sign__social">
                <a href='#' className="gl" onClick={() => loginGoogle()} >
                    Sign up with
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M20.945 11a9 9 0 1 1 -3.284 -5.997l-2.655 2.392a5.5 5.5 0 1 0 2.119 6.605h-4.125v-3h7.945z" />
                    </svg>
                </a>
            </div>

            <span className="sign__text">
                Already have an account? <Link href="/auth/signin">Sign in!</Link>
            </span>
        </form>
    )
}

export default FormSignUp
