Vim�UnDo� �,�x����ؿ|9��*>�4^AMgN�\�F��                                     b��    _�                        *    ����                                                                                                                                                                                                                                                                                                                               *          /       v   /    b���     �               5export const getBorderRadiiValuesString = values => {5��       *                 �                    5�_�                       3    ����                                                                                                                                                                                                                                                                                                                               3          4       v   4    b��	     �               ;export const getBorderRadiiValuesString = (values, de) => {�             5��       3              	   �             	       5�_�                       <    ����                                                                                                                                                                                                                                                                                                                               3          4       v   4    b��     �               Bexport const getBorderRadiiValuesString = (values, delimiter) => {5��       <                  �                     �       ?                  �                     �       ?                  �                     �       ?                  �                     5�_�                           ����                                                                                                                                                                                                                                                                                                                                                v       b��     �               @    acc.length ? '|' : '', // put a | only after the first value5��                     	   �             	       5�_�                       +    ����                                                                                                                                                                                                                                                                                                                                                v       b��+    �               F    acc.length ? delimiter : '', // put a | only after the first value5��       *              	   �             	       5�_�                             ����                                                                                                                                                                                                                                                                                                                                                v       b��     �                  Cimport { hasMatchingBorderRadii } from '@sqs/block-editor-schemas';       3export const getBorderRadiiChangeType = values => {   '  if (hasMatchingBorderRadii(values)) {       return 'matching';     }         return 'mixed';   };       /**    *   K * @param {object} values Object with the four corner radius ValueWithUnits   t * @returns string the values as ValueWithUnits concatenated in the order topLeft, topRight, bottomRight, bottomLeft    *  e.g. "10px|20px|30px|40px"    */   Hexport const getBorderRadiiValuesString = (values, delimiter = '|') => {   M  const listOfCorners = ['topLeft', 'topRight', 'bottomRight', 'bottomLeft'];       8  return listOfCorners.reduce((acc, next) => acc.concat(   N    acc.length ? delimiter : '', // put a delimiter only after the first value   P    values[next]?.value, // guard against undefined values; revisit in CMS-41970   O    values[next]?.unit, // guard against undefined values; revisit in CMS-41970   	  ), '');   };5�5��