import { Injectable } from '@nestjs/common';
//npm install @aws-sdk/client-secrets-manager
import { SecretsManagerClient, GetSecretValueCommand } from '@aws-sdk/client-secrets-manager';

@Injectable()
export class SecretosService {
    private client: SecretsManagerClient;

    onModuleInit() {
        this.client = new SecretsManagerClient({
            region: "" + process.env.AWS_REGION,
            credentials: {
                accessKeyId: "" + process.env.AWS_ACCESS_KEY_ID,
                secretAccessKey: "" + process.env.AWS_SECRET_ACCESS_KEY,
            },
        });


    }
    async getSecret(secretName: string): Promise<any> {
        try {
            const command = new GetSecretValueCommand({ SecretId: secretName });
            const response = await this.client.send(command);

            if (response.SecretString) {
                return JSON.parse(response.SecretString);
            }

            throw new Error('El secreto no tiene un valor válido');
        } catch (error) {
            console.error('Error obteniendo el secreto:', error);
            throw error;
        }
    }
}
