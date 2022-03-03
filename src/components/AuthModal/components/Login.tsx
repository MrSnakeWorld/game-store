import React from 'react';
import {Button, Center, FormControl, FormErrorMessage, FormLabel, Heading, IconButton, Input, InputGroup, InputRightElement, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, useBoolean} from '@chakra-ui/react';
import {Field, Form, Formik, FormikProps, FieldProps} from 'formik';
import {HiEyeOff, HiEye} from 'react-icons/hi';
import validateEmail from '../../../tools/validates/validateEmail';
import validatePass from '../../../tools/validates/validatePass';

export interface ILoginValues {
	email: string;
	pass: string;
}

interface ILoginProps {
	setAuth: () => void;
	onLogin: (values: ILoginValues) => void;
}

const Login = ({setAuth, onLogin}: ILoginProps) => {
	const [isVisible, {toggle}] = useBoolean(false);

	return (
		<ModalContent>
			<ModalCloseButton />
			<ModalHeader>
				<Heading textAlign="center">Логин</Heading>
			</ModalHeader>
			<ModalBody>
				<Formik
					initialValues={{email: '', pass: ''}}
					onSubmit={onLogin}
				>
					{(props: FormikProps<unknown>) => (
						<Form {...props}>
							<Field name="email" validate={validateEmail}>
								{({field, form}: FieldProps) => (
									<FormControl isInvalid={!!(form.errors.email && form.touched.email)}>
										<FormLabel htmlFor="email">Электронная почта</FormLabel>
										<Input
											{...field}
											id="email"
											type="email"
										/>
										<FormErrorMessage>{form.errors.email}</FormErrorMessage>
									</FormControl>
								)}
							</Field>

							<Field name="pass" validate={validatePass}>
								{({field, form}: FieldProps) => (
									<FormControl isInvalid={!!(form.errors.pass && form.touched.pass)}>
										<FormLabel htmlFor="pass">Пароль</FormLabel>
										<InputGroup>
											<Input
												{...field}
												id="pass"
												type={isVisible ? 'text' : 'password'}
											/>
											<InputRightElement>
												<IconButton 
													onClick={toggle} 
													aria-label="Make visible"
													icon={isVisible 
														? <HiEye size="1rem"/> 
														: <HiEyeOff size="1rem"/>}
												/>
											</InputRightElement>
										</InputGroup>
										<FormErrorMessage>{form.errors.pass}</FormErrorMessage>
									</FormControl>
								)}
							</Field>

							<Center pt={5} >
								<Button
									width="10rem"
									type="submit"
									colorScheme="blue"
								>
									Вход
								</Button>
							</Center>
						</Form>
					)}
				</Formik>
			</ModalBody>
			<ModalFooter justifyContent="center">
				<Button mr={3} variant="link" onClick={setAuth}>
					Чтобы зарегистрироваться - нажмите сюда
				</Button>
			</ModalFooter>
		</ModalContent>
	);
};

export default Login;