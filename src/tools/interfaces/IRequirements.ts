export interface IRequirements {
	type: 'Минимальные' | 'Рекомендуемые';
	OS: string;
	CPU: string;
	RAM: string;
	GPU: string;
	DirectX?: number;
	Size: number;
}