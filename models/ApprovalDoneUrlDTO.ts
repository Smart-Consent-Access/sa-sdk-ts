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
* Contains the URL including the jwt to use to trigger finalization of the consent approval in the consenting|requesting serviceprovider. The jwt payload is of type SAConsApprovalInitializeSp2ToSaJWT for consenting serviceprovider or SAConsApprovalFinalizeSp1ToSaJWT for requesting serviceprovider
*/
export class ApprovalDoneUrlDTO {
    'approvalDoneURL': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "approvalDoneURL",
            "baseName": "approvalDoneURL",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ApprovalDoneUrlDTO.attributeTypeMap;
    }
    
    public constructor() {
    }
}

