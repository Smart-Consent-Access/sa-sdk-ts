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

export class ServiceProviderPatchDTO {
    'id'?: string;
    'name'?: string;
    'iconUrl'?: string;
    'publicKey'?: string;
    'initiateConsentRequestUrl'?: string;
    'finalizeConsentRequestUrl'?: string;
    'initiateConsentUrl'?: string;
    'finalizeConsentUrl'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
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
            "name": "iconUrl",
            "baseName": "iconUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "publicKey",
            "baseName": "publicKey",
            "type": "string",
            "format": ""
        },
        {
            "name": "initiateConsentRequestUrl",
            "baseName": "initiateConsentRequestUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "finalizeConsentRequestUrl",
            "baseName": "finalizeConsentRequestUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "initiateConsentUrl",
            "baseName": "initiateConsentUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "finalizeConsentUrl",
            "baseName": "finalizeConsentUrl",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ServiceProviderPatchDTO.attributeTypeMap;
    }
    
    public constructor() {
    }
}

