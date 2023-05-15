import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '../Views/firebase';
import React from 'react';
import { Form, Input, Button } from 'antd';
import { useState } from 'react';

//IMportar las funciones del controlador de usuarios
import { createUser, logIn } from '../Controllers/userController.js';


const Login = () => {
    const [toggleButton, setToggleButton] = useState(true);
    function handleChange() {
        setToggleButton(!toggleButton);
    }

    async function createUserAndSaveData(values) {
        console.log('Received values of form: ', values);

        //Ya tengo mis datos
        let email = values.email;
        let password = values.password;
        

        let res = null;

        try{
            //Ahora los mando al controlador
            res = await createUser({email, password});
            console.log("Usuario creado exitosamente: ", res);
            window.location.replace('/home');
        }
        catch(error){
            console.log("ERROR: ", error);
            console.alert("ERROR");
            //window.location.reload();
        }
    }

    const signIn = async (values) => {
        let email = values.email;
        let password = values.password;

        let res = null;

        try{
            //Ahora los mando al controlador
            res = await logIn({email, password});
            console.log("Usuario creado exitosamente: ", res);
            window.location.replace('/home');
        }
        catch(error){
            console.log("ERROR: ", error);
            console.alert("ERROR");
            //window.location.reload();
        }
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