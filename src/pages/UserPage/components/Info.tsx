import {Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Heading, Input} from '@chakra-ui/react';
import {Field, FieldProps, Form, Formik, FormikProps} from 'formik';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {editUser} from '../../../store/users/actions';
import useSize from '../../../tools/hooks/useSize';
import {IUser} from '../../../tools/interfaces/IUser';
import validateEmail from '../../../tools/validates/validateEmail';
import validateName from '../../../tools/validates/validateName';

const Info = ({user}: {user: IUser}) => {
	const [isChange, setChange] = useState(false);
	const dispatch = useDispatch();
	const {isDesktop} = useSize();

	const handleApply = (
		values: {
			name: string;
			email: string;
		}
	) => {
		setChange(false);
		dispatch(editUser(values.name, values.email));
	};

	const handleEdit = () => setChange(true);

	const handleCancel = () => setChange(false);

	return (
		<Flex className="user__info" justifyContent="space-between">
			{!isChange ? (
				<Box className="user__info-content">
					<Heading size={isDesktop ? '4xl' : '2xl'}>{user.name}</Heading>
					<Heading size={isDesktop ? 'xl' : 'lg'}>{user.email}</Heading>
				</Box>
			) : (
				<Formik
					initialValues={{name: user.name, email: user.email}}
					onSubmit={handleApply}
				>
					{(props: FormikProps<unknown>) => (
						<Form className='user__info-content' {...props}>
							<Field name="name" validate={validateName}>
								{({field, form}: FieldProps) => (
									<FormControl isInvalid={!!(form.errors.name && form.touched.name)}>
										<FormLabel htmlFor="name">
											<Heading size="md">Имя пользователя</Heading>
										</FormLabel>
										<Input
											{...field}
											id="name"
											type="text"
											size="lg"
											mb={5}
										/>
										<FormErrorMessage>{form.errors.name}</FormErrorMessage>
									</FormControl>
								)}	
							</Field>

							<Field name="email" validate={validateEmail} >
								{({field, form}: FieldProps) => (
									<FormControl isInvalid={!!(form.errors.email && form.touched.email)}>
										<FormLabel htmlFor="email">
											<Heading size="md">Электронная почта</Heading>
										</FormLabel>
										<Input
											{...field}
											id="email"
											type="email"
											size="lg"
										/>
										<FormErrorMessage>{form.errors.email}</FormErrorMessage>
									</FormControl>
								)}
							</Field>

							<Box className="user__info-buttons" pt={3} >
								<Button 
									colorScheme="blue" 
									type="submit"
									borderRadius={15}
								>
									Подтвердить
								</Button>
								{isChange && (
									<Button 
										colorScheme="red"
										borderRadius={15} 
										position="absolute"
										right={0}
										onClick={handleCancel}
									>
										Отмена
									</Button>
								)}
							</Box>
						</Form>
					)}
				</Formik>
			)}
			{!isChange && (
				<Box className="user__info-buttons" pt={3} >
					<Button 
						colorScheme="blue" 
						borderRadius={15}
						onClick={handleEdit}
					>
						Редактировать
					</Button>
				</Box>
			)}
		</Flex>
	);
};

export default Info;