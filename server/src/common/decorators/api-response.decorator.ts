import { Type, applyDecorators } from '@nestjs/common';
import { ApiExtraModels, ApiOkResponse, getSchemaPath } from '@nestjs/swagger';

export const ApiResponseDecorator = <TModel extends Type<any>>(
  model: TModel,
) => {
  return applyDecorators(
    ApiExtraModels(model),
    ApiOkResponse({
      schema: {
        allOf: [
          {
            properties: {
              success: {
                type: 'boolean',
                example: true,
              },
              data: {
                $ref: getSchemaPath(model),
              },
              error: {
                type: 'string',
                example: null,
              },
              timestamp: {
                type: 'string',
                example: '2024-03-14T12:00:00.000Z',
              },
              path: {
                type: 'string',
                example: '/api/v1/health',
              },
            },
          },
        ],
      },
    }),
  );
};
