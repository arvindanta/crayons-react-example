
import isPlainObject from 'lodash/isPlainObject';
import clone from 'lodash/clone';
import toPath from 'lodash/toPath';
// export const isFormParticipantElement = (type: string) =>
//   !!type &&
//   [
//     'text',
//     'email',
//     'number',
//     'tel',
//     'textarea',
//     'select',
//     'checkbox',
//     'radio',
//     'date',
//     'time',
//   ].includes(type.toLowerCase());
// export const isInputElement = (type: string): boolean =>
//   !!type &&
//   [
//     'text',
//     'email',
//     'number',
//     'tel',
//     'textarea',
//     'checkbox',
//     'radio',
//     'date',
//     'time',
//   ].includes(type.toLowerCase());

// export const isCheckboxType = (type: string): boolean =>
//   !!type && type === 'checkbox';

// export const isRadioType = (type: string): boolean =>
//   !!type && type === 'radio';

// export const isNumberType = (type: string): boolean =>
//   !!type && type === 'number';

// export const isDateType = (type: string): boolean => !!type && type === 'date';

export const isSelectType = (type) =>
  !!type && type === 'select';

export const getElementValue = (_type,_event,result) => {
  const value = result.value; // if(!result) { value = e.target.value}
  return value;
};

/**
 * Recursively prepare values.
 */
export function prepareDataForValidation(values) {
  const data = Array.isArray(values) ? [] : {};
  for (const k in values) {
    if (Object.prototype.hasOwnProperty.call(values, k)) {
      const key = String(k);
      if (Array.isArray(values[key]) === true) {
        data[key] = values[key].map((value) => {
          if (Array.isArray(value) === true || isPlainObject(value)) {
            return prepareDataForValidation(value);
          } else {
            return value !== '' ? value : undefined;
          }
        });
      } else if (isPlainObject(values[key])) {
        data[key] = prepareDataForValidation(values[key]);
      } else {
        data[key] = values[key] !== '' ? values[key] : undefined;
      }
    }
  }
  return data;
}

export function validateYupSchema(
  values,
  schema,
  sync = false,
  context = {}
) {
  const validateData = prepareDataForValidation(values);
  return schema[sync ? 'validateSync' : 'validate'](validateData, {
    abortEarly: false,
    context: context,
  });
}

export function yupToFormErrors(yupError) {
  let errors = {};
  if (yupError.inner) {
    if (yupError.inner.length === 0) {
      return setIn(errors, yupError.path, yupError.message);
    }
    for (const err of yupError.inner) {
      if (!getIn(errors, err.path)) {
        errors = setIn(errors, err.path, err.message);
      }
    }
  }
  return errors;
}
/** @private is the given object an Object? */
export const isObject = (obj) => obj !== null && typeof obj === 'object';

/** @private is the given object an integer? */
export const isInteger = (obj) =>
  String(Math.floor(Number(obj))) === obj;

/**
 * Deeply get a value from an object via its path.
 */
export function getIn(obj, key, def, p = 0) {
  const path = toPath(key);
  while (obj && p < path.length) {
    obj = obj[path[p++]];
  }
  return obj === undefined ? def : obj;
}
/** set values recursively on the object based on the given path */
export function setIn(obj, path, value) {
  const res = clone(obj);
  let resVal = res;
  let i = 0;
  const pathArray = toPath(path);

  for (; i < pathArray.length - 1; i++) {
    const currentPath = pathArray[i];
    const currentObj = getIn(obj, pathArray.slice(0, i + 1));

    if (currentObj && (isObject(currentObj) || Array.isArray(currentObj))) {
      resVal = resVal[currentPath] = clone(currentObj);
    } else {
      const nextPath = pathArray[i + 1];
      resVal = resVal[currentPath] =
        isInteger(nextPath) && Number(nextPath) >= 0 ? [] : {};
    }
  }

  // Return original object if new value is the same as current
  if ((i === 0 ? obj : resVal)[pathArray[i]] === value) {
    return obj;
  }

  if (value === undefined) {
    delete resVal[pathArray[i]];
  } else {
    resVal[pathArray[i]] = value;
  }

  // If the path array has a single element, the loop did not run.
  // Deleting on `resVal` had no effect in this scenario, so we delete on the result instead.
  if (i === 0 && value === undefined) {
    delete res[pathArray[i]];
  }

  return res;
}

/**
 * Recursively a set the same value for all keys and arrays nested object, cloning
 * @param object
 * @param value
 * @param visited
 * @param response
 */
export function setNestedObjectValues(
  object,
  value,
  visited = new WeakMap(),
  response = {}
){
  for (const k of Object.keys(object)) {
    const val = object[k];
    if (isObject(val)) {
      if (!visited.get(val)) {
        visited.set(val, true);
        // In order to keep array values consistent for both dot path  and
        // bracket syntax, we need to check if this is an array so that
        // this will output  { friends: [true] } and not { friends: { "0": true } }
        response[k] = Array.isArray(val) ? [] : {};
        setNestedObjectValues(val, value, visited, response[k]);
      }
    } else {
      response[k] = value;
    }
  }

  return response;
}
