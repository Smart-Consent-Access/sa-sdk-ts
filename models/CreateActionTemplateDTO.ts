/**
 * @ao/ah-api
 * Telia Smart Access API
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { CreateConditionTemplateDTO } from './CreateConditionTemplateDTO';
import { CreateResourceTemplateDTO } from './CreateResourceTemplateDTO';
import { HttpFile } from '../http/http';

export class CreateActionTemplateDTO {
    'id'?: string;
    'version'?: number;
    'serviceProviderId': string;
    'name': string;
    'description': string;
    'tenantName': string;
    'systemName': string;
    'resourceTemplates': Array<CreateResourceTemplateDTO>;
    'conditionTemplates': Array<CreateConditionTemplateDTO>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number",
            "format": "double"
        },
        {
            "name": "serviceProviderId",
            "baseName": "serviceProviderId",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "tenantName",
            "baseName": "tenantName",
            "type": "string",
            "format": ""
        },
        {
            "name": "systemName",
            "baseName": "systemName",
            "type": "string",
            "format": ""
        },
        {
            "name": "resourceTemplates",
            "baseName": "resourceTemplates",
            "type": "Array<CreateResourceTemplateDTO>",
            "format": ""
        },
        {
            "name": "conditionTemplates",
            "baseName": "conditionTemplates",
            "type": "Array<CreateConditionTemplateDTO>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateActionTemplateDTO.attributeTypeMap;
    }
    
    public constructor() {
    }
}

