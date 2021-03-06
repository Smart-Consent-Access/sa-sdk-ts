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

import { HttpFile } from '../http/http';

export class ResourceTagTemplateDTO {
    'id': string;
    'policyResourceTemplateId': string;
    'name': string;
    'validationType': string;
    'validationParams': string;
    'ordno': number;
    'pii': boolean;
    'e2eEncrypted': boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "policyResourceTemplateId",
            "baseName": "policyResourceTemplateId",
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
            "name": "validationType",
            "baseName": "validationType",
            "type": "string",
            "format": ""
        },
        {
            "name": "validationParams",
            "baseName": "validationParams",
            "type": "string",
            "format": ""
        },
        {
            "name": "ordno",
            "baseName": "ordno",
            "type": "number",
            "format": "double"
        },
        {
            "name": "pii",
            "baseName": "pii",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "e2eEncrypted",
            "baseName": "e2eEncrypted",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ResourceTagTemplateDTO.attributeTypeMap;
    }
    
    public constructor() {
    }
}

