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

/**
* Contains a signed jwt issued and signed by AO. The jwt payload is of type SAAuthTicket
*/
export class AuthTicketDTO {
    'authTicket': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "authTicket",
            "baseName": "authTicket",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AuthTicketDTO.attributeTypeMap;
    }
    
    public constructor() {
    }
}

