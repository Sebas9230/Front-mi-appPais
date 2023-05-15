import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '../components/firebase';
import React from 'react';
import { Form, Input, Button } from 'antd';
import { useState } from 'react';

const Login = () => {
    const [toggleButton, setToggleButton] = useState(true);
    function handleChange() {
        setToggleButton(!toggleButton);
    }
    async function createUserAndSaveData(values) {
        console.log('Received values of form: ', values);
        let email = values.email;
        let password = values.password;

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // El usuario se creó exitosamente
                const user = userCredential.user;
                console.log('Usuario creado:', user);
                window.location.replace('/home');
            })
            .catch((error) => {
                // Hubo un error al crear el usuario
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error('Error al crear usuario:', errorCode, errorMessage);
            });

    }

    const signIn = (values) => {
        let email = values.email;
        let password = values.password;

        return signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Inicio de sesión exitoso
            const user = userCredential.user;
            console.log('Usuario autenticado:', user);
            window.location.replace('/home');
            return user;
          })
          .catch((error) => {
            // Error al iniciar sesión
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error al autenticar:', errorCode, errorMessage);
            throw error;
          });
      };



    return (
        <>
            {
                toggleButton ?
                    (<>    <h1>Register</h1>
                        <Form
                            name="registration"
                            onFinish={createUserAndSaveData}
                            scrollToFirstError
                        >
                            < Form.Item
                                name="email"
                                label="E-mail"
                                rules={
                                    [
                                        {
                                            type: 'email',
                                            message: 'The input is not valid E-mail!',
                                        },
                                        {
                                            required: true,
                                            message: 'Please input your E-mail!',
                                        },
                                    ]}
                            >
                                <Input />
                            </Form.Item >

                            <Form.Item
                                name="password"
                                label="Password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                                hasFeedback
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Register
                                </Button>
                            </Form.Item>
                        </Form ></>)
                    : (<><h1>Login</h1><Form
                        name="login"
                        onFinish={signIn}
                        scrollToFirstError
                    >
                        < Form.Item
                            name="email"
                            label="E-mail"
                            rules={
                                [
                                    {
                                        type: 'email',
                                        message: 'The input is not valid E-mail!',
                                    },
                                    {
                                        required: true,
                                        message: 'Please input your E-mail!',
                                    },
                                ]}
                        >
                            <Input />
                        </Form.Item >

                        <Form.Item
                            name="password"
                            label="Password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                            hasFeedback
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Login
                            </Button>
                        </Form.Item>
                    </Form ></>)
            }
            <Button type="primary" onClick={handleChange}>
                Change
            </Button>
        </>

    );
}

export default Login;