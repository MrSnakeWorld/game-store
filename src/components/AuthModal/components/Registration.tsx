import React from 'react';
import {Button, Center, FormControl, FormErrorMessage, FormLabel, Heading, IconButton, Input, InputGroup, InputRightElement, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, useBoolean, useControllableState} from '@chakra-ui/react';
import {Field, FieldProps, Form, Formik, FormikProps} from 'formik';
import validateName from '../../../tools/validates/validateName';
import validateEmail from '../../../tools/validates/validateEmail';
import validatePass from '../../../tools/validates/validatePass';
import {HiEye, HiEyeOff} from 'react-icons/hi';

export interface IRegistrationValues {
	name: string;
	email: string;
	pass: string;
}

interface IRegistrationProps {
	setAuth: () => void;
	onRegistration: (values: IRegistrationValues) => void;
}

const Registration = ({setAuth, onRegistration}: IRegistrationProps) => {
	const [isVisible, {toggle}] = useBoolean(false);

	return (
		<ModalContent>
			<ModalCloseButton />
			<ModalHeader>
				<Heading textAlign="center">Регистрация</Heading>
			</ModalHeader>
			<ModalBody>
				<Formik
					initialValues={{name: '', email: '', pass: ''}}
					onSubmit={onRegistration}
				>
					{(props: FormikProps<unknown>) => (
						<Form>
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

							<Field name="name" validate={validateName}>
								{({field, form}: FieldProps) => (
									<FormControl isInvalid={!!(form.errors.name && form.touched.name)}>
										<FormLabel htmlFor="name">Имя пользователя</FormLabel>
										<Input
											{...field}
											id="name"
											type="text"
										/>
										<FormErrorMessage>{form.errors.name}</FormErrorMessage>
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
									Регистрация
								</Button>
							</Center>
						</Form>
					)}
				</Formik>
			</ModalBody>
			<ModalFooter justifyContent="center">
				<Button mr={3} variant="link" onClick={setAuth}>
					Если вы уже зарегистрированы - нажмите сюда
				</Button>
			</ModalFooter>
		</ModalContent>
	);
};

export default Registration;