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

import { ConditionTemplateDTO } from './ConditionTemplateDTO';
import { ResourceTemplateDTO } from './ResourceTemplateDTO';
import { HttpFile } from '../http/http';

export class ActionTemplateDTO {
    'id': string;
    'serviceProviderId': string;
    'name': string;
    'description': string;
    'version': number;
    'tenantName': string;
    'systemName': string;
    'status': string;
    'resourceTemplates': Array<ResourceTemplateDTO>;
    'conditionTemplates': Array<ConditionTemplateDTO>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
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
            "name": "version",
            "baseName": "version",
            "type": "number",
            "format": "double"
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
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        },
        {
            "name": "resourceTemplates",
            "baseName": "resourceTemplates",
            "type": "Array<ResourceTemplateDTO>",
            "format": ""
        },
        {
            "name": "conditionTemplates",
            "baseName": "conditionTemplates",
            "type": "Array<ConditionTemplateDTO>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ActionTemplateDTO.attributeTypeMap;
    }
    
    public constructor() {
    }
}

