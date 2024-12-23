import React from 'react'
import './SignupPage.css' 
import { useForm } from 'react-hook-form'
import {z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
const schema = z.object({
    email: z.string().email().min(9),
    password: z.string().min(8, {message: 'Password must be at least 8 characters'}),
    confirmPassword: z.string(),
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
})
const SignupPage = () => {
    const {register, handleSubmit, formState: {errors}} = useForm({resolver: zodResolver(schema)});
    const onSubmit = formData => console.log(formData)
  return (
    <section className='align_center form_page'>
        <form className="authentication_form" onSubmit={handleSubmit(onSubmit)}>
            <h2>Sign Up</h2>
            <div className='form_input'>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email'  className='form_text_input' placeholder='Enter your email' {...register("email")}/>
                    {errors.email && (<em className='form_error_au'>
                        {errors.email.message}
                    </em>)}
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' className='form_text_input' placeholder='Enter your password' {...register("password")}/>
                    {errors.password && (<em className='form_error_au'>
                        {errors.password.message}
                    </em>)}
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" id='confirmPassword' className='form_text_input' placeholder='Confirm your password' {...register("confirmPassword")}/>
                    {errors.confirmPassword && (<em className='form_error_au'>
                        {errors.confirmPassword.message}
                    </em>)}
                </div>
                <button type='submit' className='search_button form_submit'>Submit</button>
            </div>
        </form>
    </section>  
  )
}

export default SignupPage