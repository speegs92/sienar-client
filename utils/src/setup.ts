import { registerProvider } from '@utils/providers.tsx';
import AuthProvider from '@utils/components/AuthProvider.tsx';
import InfrastructureProvider from '@utils/components/InfrastructureProvider.tsx';

export default function setup() {
	registerProvider(AuthProvider);
	registerProvider(InfrastructureProvider);
}