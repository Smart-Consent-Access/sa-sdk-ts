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

import { LegalEntityDTO } from './LegalEntityDTO';
import { PolicyDTO } from './PolicyDTO';
import { HttpFile } from '../http/http';

/**
* An approved consent, given by the person referenced by Legal Entity. Points to the corresponding (Authorization) Policy that this consent gives right to.
*/
export class ConsentDTO {
    'id': string;
    'legalEntity'?: LegalEntityDTO;
    'policy'?: Array<PolicyDTO>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "legalEntity",
            "baseName": "legalEntity",
            "type": "LegalEntityDTO",
            "format": ""
        },
        {
            "name": "policy",
            "baseName": "policy",
            "type": "Array<PolicyDTO>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ConsentDTO.attributeTypeMap;
    }
    
    public constructor() {
    }
}
